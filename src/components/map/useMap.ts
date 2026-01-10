import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './constants';
import type { Card } from '../../alltypes';

const defaultIcon = L.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const activeIcon = L.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

type UseMapProps = {
  cards: Card[];
  activeCard?: Card | null;
  center: [number, number];
};

export const useMap = ({ cards, activeCard = null, center }: UseMapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  // Инициализация карты
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) {
      return;
    }

    mapInstanceRef.current = L.map(mapRef.current, {
      center,
      zoom: 12,
      zoomControl: false,
    });

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }
    ).addTo(mapInstanceRef.current);
  }, [center]);

  // Обновление маркеров при изменении предложений или активного предложения
  useEffect(() => {
    if (!mapInstanceRef.current) {
      return;
    }

    // Очистка существующих маркеров
    markersRef.current.forEach((marker) => {
      mapInstanceRef.current?.removeLayer(marker);
    });
    markersRef.current = [];

    // Добавление маркеров для всех предложений
    cards.forEach((card) => {
      if (card.latitude && card.longitude) {
        const isActive = activeCard?.id === card.id;
        const marker = L.marker([card.latitude, card.longitude], {
          icon: isActive ? activeIcon : defaultIcon,
        });

        marker.bindPopup(`<b>${card.title}</b><br>€${card.price} per night`);
        marker.addTo(mapInstanceRef.current!);
        markersRef.current.push(marker);
      }
    });
  }, [cards, activeCard]);

  // Центрирование карты на активное предложение
  useEffect(() => {
    if (!mapInstanceRef.current) {
      return;
    }

    if (activeCard && activeCard.latitude && activeCard.longitude) {
      mapInstanceRef.current.setView(
        [activeCard.latitude, activeCard.longitude],
        12
      );
    } else {
      mapInstanceRef.current.setView(center, 12);
    }
  }, [activeCard, center]);

  // Очистка карты при размонтировании компонента
  useEffect(() => () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }
  }, []);

  return { mapRef, map: mapInstanceRef.current };
};

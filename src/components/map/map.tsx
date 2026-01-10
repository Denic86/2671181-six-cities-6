import { useMap } from './useMap';
import type { Card } from '../../alltypes';

type MapProps = {
  cards: Card[];
  activeCard?: Card | null;
  center: [number, number];
  height?: string;
};

function Map({
  cards,
  activeCard = null,
  center,
  height = '100%',
}: MapProps): JSX.Element {
  const { mapRef } = useMap({ cards, activeCard, center });

  return <div ref={mapRef} style={{ height }}></div>;
}

export default Map;

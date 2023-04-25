export enum EMediaItemCorner {
  LEFT,
  RIGHT,
}

export interface IMediaItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  corner: EMediaItemCorner;
}


export interface IMediaDisplayProps {
  items: IMediaItem[];
  selected?: string[];
  onChange?: (selected: string) => void;
}


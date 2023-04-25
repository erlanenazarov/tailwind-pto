export interface IMediaCardProps {
  title: string;
  caption: string;
  image: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

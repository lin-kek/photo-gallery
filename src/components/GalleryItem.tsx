import { Photo } from "@/types/Photo";

type Props = {
  photo: Photo;
  onClick: () => void;
};

export default function GalleryItem({ photo, onClick }: Props) {
  return (
    <div onClick={onClick} className="cursor-pointer hover:opacity-80">
      <img
        className="w-full h-full rounded-md"
        src={`/assets/${photo.image}`}
        alt=""
      />
    </div>
  );
}

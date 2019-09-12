declare interface Gif {
  id: number,
  title: string;
  url: string;
  user?: User;
  rating: string;
}

declare interface GifDetails {
  id: number,
  title: string;
  url: string;
  user: User;
  rating: string;
}

declare interface User {
  id: number,
  display_name: string;
  avatar_url: string;
}

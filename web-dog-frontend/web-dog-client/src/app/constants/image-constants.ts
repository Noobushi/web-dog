export default class ImageConstants {

    public static readonly DEFAULT_AVATAR_IMAGE = "assets/pictures/avatars/defaultAvatar.jpg";

    static avatarImageList: Array<{ id: number, url: string }> = [
        { id: 1, url: 'assets/pictures/avatars/labradorRetriever.avif' },
        { id: 2, url: 'assets/pictures/avatars/berneseMountainDog.webp' },
        { id: 3, url: 'assets/pictures/avatars/germanShepherd.png' },
        { id: 4, url: 'assets/pictures/avatars/australianShepherd.webp' },
        { id: 5, url: 'assets/pictures/avatars/caucasianShepherd.webp' },
        { id: 6, url: 'assets/pictures/avatars/husky.jpg' }
    ];
}
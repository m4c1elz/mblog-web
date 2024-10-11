export interface UserType {
    id: number
    name: string
    atsign: string
    email: string
    password?: string
    followers?: number
    description: any
    createdAt: string
    updatedAt: any
    postCount?: number
    isFollowing?: boolean
}

import type { Post } from '@/types';

export function getTags(posts: Post[]) {
    return [...new Set(posts.map(post => post.frontmatter.tags).flat())].filter(tag => tag !== undefined)
}
import type { MarkdownInstance } from 'astro';
import type { Frontmatter } from '@/types';

export function getTags(posts: MarkdownInstance<Frontmatter>[]) {
    return [...new Set(posts.map(post => post.frontmatter.tags).flat())].filter(tag => tag !== undefined)
}
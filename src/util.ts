import type { Post } from '@/types';

export function filterPosts(...posts: Post[][]): Post[] {
    return posts.flat().filter(post => post.frontmatter.draft !== true)
}

export function sortDates(...posts: Post[][]): Post[] {
    return posts.flat().sort((a, b) => (
        (typeof b.frontmatter.date === 'string' ? Date.parse(b.frontmatter.date) : (b.frontmatter.date||0).valueOf()) -
        (typeof a.frontmatter.date === 'string' ? Date.parse(a.frontmatter.date) : (a.frontmatter.date||0).valueOf())
    ))
}

export function filterSort(...posts: Post[][]): Post[] {
    return sortDates(filterPosts(posts.flat()))
}

export function getAllTags(...posts: Post[][]): string[] {
    // Get all tags in an array of posts including duplicates
    return posts.flat().map(post => post.frontmatter.tags||[]).flat()
}

export function getTags(...posts: Post[][]): string[] {
    // Get all tags in an array of posts without duplicates
    return [...new Set(getAllTags(...posts))]
}

export function tagFrequency(...posts: Post[][]): {[tag: string]: number} {
    // Number of times each tag is used inside an array of posts
    const freqMap: { [tag: string]: number } = {};
    
    for (const tag of getAllTags(...posts)) {
        freqMap[tag] = (freqMap[tag] || 0) + 1;
    }

    return Object.fromEntries(
        Object.entries(freqMap).sort(([,a],[,b]) => b-a)
    )
}
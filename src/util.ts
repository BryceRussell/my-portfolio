import type { Article } from '@/types';

export function getAllTags(...posts: Article[][]): string[] {
    //Get all tags in an array of posts including duplicates
    return posts.flat().map(post => post.frontmatter.tags||[]).flat()
}

export function getTags(...posts: Article[][]): string[] {
    //Get all tags in an array of posts without duplicates
    return [...new Set(getAllTags(...posts))]
}

export function tagFrequency(...posts: Article[][]): {[tag: string]: number} {
    // Returns a sorted map object of all keys in an array and their frequency, or number of times used
    //Count
    const freq = getAllTags(...posts).reduce((obj: {[key: string]: number}, key) => {
        if (key) obj[key] = ++obj[key] || 1;
        return obj
    }, {});
    //Sort
    return Object.entries(freq)
        .sort(([,a],[,b]) => b-a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
}
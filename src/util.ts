import type { Entry } from '@/types';

export function filterPosts(...posts: Entry[][]): Entry[] {
    return posts.flat().filter(post => post.data.draft !== true)
}

export function sortDates(...posts: Entry[][]): Entry[] {
    return posts.flat().sort((a, b) => (
        (typeof b.data.date === 'string' ? Date.parse(b.data.date) : (b.data.date||0).valueOf()) -
        (typeof a.data.date === 'string' ? Date.parse(a.data.date) : (a.data.date||0).valueOf())
    ))
}

export function filterSort(...posts: Entry[][]): Entry[] {
    return sortDates(filterPosts(posts.flat()))
}

export function getAllTags(...posts: Entry[][]): string[] {
    // Get all tags in an array of posts including duplicates
    return posts.flat().map(post => post.data.tags||[]).flat()
}

export function getTags(...posts: Entry[][]): string[] {
    // Get all tags in an array of posts without duplicates
    return [...new Set(getAllTags(filterPosts(...posts)))]
}

export function tagFrequency(...posts: Entry[][]): Record<string, number> {
    // Number of times each tag is used inside an array of posts
    const freqMap: Record<string, number> = {};
    
    for (const tag of getAllTags(filterPosts(...posts))) {
        freqMap[tag] = (freqMap[tag] || 0) + 1;
    }

    return Object.fromEntries(
        Object.entries(freqMap).sort(([,a],[,b]) => b-a)
    )
}
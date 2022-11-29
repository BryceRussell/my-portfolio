export interface Frontmatter {
    slug?: string;
    title?: string;
    package?: string;
    description?: string;
    date?: string|number|Date;
    source?: string;
    demo?: string;
    tags?: string[];
    draft?: boolean;
}
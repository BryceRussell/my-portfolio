export interface BasicFrontmatter {
    slug?: string;
    title?: string;
    description?: string;
    date?: string|number|Date;
    source?: string;
    demo?: string;
    tags?: string[];
}

export interface Project extends BasicFrontmatter {
    package?: string;
}

export interface Post extends BasicFrontmatter {

}
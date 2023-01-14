declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"default-markdown-frontmatter.md": {
  id: "default-markdown-frontmatter.md",
  slug: "default-markdown-frontmatter",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"responsive-aspect-ratios.md": {
  id: "responsive-aspect-ratios.md",
  slug: "responsive-aspect-ratios",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"test.md": {
  id: "test.md",
  slug: "test",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},
"projects": {
"1-astro-headless-ui.md": {
  id: "1-astro-headless-ui.md",
  slug: "1-astro-headless-ui",
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2-astro-minecraft-theme.md": {
  id: "2-astro-minecraft-theme.md",
  slug: "2-astro-minecraft-theme",
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"3-astro-json-element.md": {
  id: "3-astro-json-element.md",
  slug: "3-astro-json-element",
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"4-astro-default-frontmatter.md": {
  id: "4-astro-default-frontmatter.md",
  slug: "4-astro-default-frontmatter",
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"5-unturned-asset-scraper.md": {
  id: "5-unturned-asset-scraper.md",
  slug: "5-unturned-asset-scraper",
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"6-unturned-tools-2.0.md": {
  id: "6-unturned-tools-2.0.md",
  slug: "6-unturned-tools-20",
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
},

	};

	type ContentConfig = typeof import("./config");
}

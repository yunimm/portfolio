export interface ProjectMedia {
	type: 'image' | 'video'
	src: string
	alt?: string
}

export interface Project {
	id: string
	tag: string
	title: string
	desc: string
	longDesc?: string
	iconPath: string
	gradient: string
	accent: string
	metrics: string[]
	highlights: string[]
	stack: string[]
	media: ProjectMedia[]
	demoUrl?: string
	previewUrl?: string
}

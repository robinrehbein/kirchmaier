import type { Content } from 'src/interfaces/interfaces';
import { readable } from 'svelte/store';
import content from '../../static/content.json';

export const jsonContent = readable<Content>(null, (set) => {
        set(content as Content);
});
import * as _ from 'lodash';

export class SearchResult {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;

    constructor(obj?: any) {
        this.id = _.get(obj, 'id', null);
        this.title = _.get(obj, 'title', null);
        this.description = _.get(obj, 'description', null);
        this.thumbnailUrl = _.get(obj, 'thumbnailUrl', null);
        this.videoUrl = _.get(obj, 'videoUrl', `https://www.youtube.com/watch?v=${this.id}`);
    }
}

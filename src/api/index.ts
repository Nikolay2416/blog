import * as posts from './posts';
import * as comments from './comments';
import * as users from './users';

export const api = { posts, comments, users } as const;

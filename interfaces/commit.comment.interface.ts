export interface IComment {
  repository: Repository;
  actor:      Actor;
  comment:    Comment;
  commit:     Commit;
}

export interface Actor {
  display_name: string;
  links:        ActorLinks;
  type:         string;
  uuid:         string;
  account_id:   string;
  nickname:     string;
}

export interface ActorLinks {
  self:   Avatar;
  html:   Avatar;
  avatar: Avatar;
}

export interface Avatar {
  href: string;
}

export interface Comment {
  id:         number;
  created_on: Date;
  updated_on: Date;
  content:    Content;
  user:       Actor;
  deleted:    boolean;
  type:       string;
  links:      CommentLinks;
  commit:     CommentCommit;
}

export interface CommentCommit {
  hash:  string;
  links: CommentLinks;
  type:  string;
}

export interface CommentLinks {
  self: Avatar;
  html: Avatar;
}

export interface Content {
  type:   string;
  raw:    string;
  markup: string;
  html:   string;
}

export interface Commit {
  type:    string;
  hash:    string;
  message: string;
  links:   PurpleLinks;
}

export interface PurpleLinks {
}

export interface Repository {
  type:       string;
  full_name:  string;
  links:      ActorLinks;
  name:       string;
  scm:        string;
  website:    null;
  owner:      Owner;
  workspace:  Project;
  is_private: boolean;
  project:    Project;
  uuid:       string;
  parent:     null;
}

export interface Owner {
  display_name: string;
  links:        ActorLinks;
  type:         string;
  uuid:         string;
  username:     string;
}

export interface Project {
  type:  string;
  key?:  string;
  uuid:  string;
  name:  string;
  links: ActorLinks;
  slug?: string;
}

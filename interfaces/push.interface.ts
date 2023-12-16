export interface Push {
  push:       PushClass;
  repository: Repository;
  actor:      Actor;
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

export interface PushClass {
  changes: Change[];
}

export interface Change {
  old:       New;
  new:       New;
  truncated: boolean;
  created:   boolean;
  forced:    boolean;
  closed:    boolean;
  links:     ChangeLinks;
  commits:   Commit[];
}

export interface Commit {
  type:       string;
  hash:       string;
  date:       Date;
  author:     Author;
  message:    string;
  summary:    Summary;
  links:      CommitLinks;
  parents:    Parent[];
  rendered:   Properties;
  properties: Properties;
}

export interface Author {
  type: string;
  raw:  string;
}

export interface CommitLinks {
  self:     Avatar;
  html:     Avatar;
  diff:     Avatar;
  approve:  Avatar;
  comments: Avatar;
  statuses: Avatar;
  patch:    Avatar;
}

export interface Parent {
  hash:  string;
  links: ParentLinks;
  type:  string;
}

export interface ParentLinks {
  self: Avatar;
  html: Avatar;
}

export interface Properties {
}

export interface Summary {
  type:   string;
  raw:    string;
  markup: string;
  html:   string;
}

export interface ChangeLinks {
  commits: Avatar;
  diff:    Avatar;
  html:    Avatar;
}

export interface New {
  name:                   string;
  target:                 Target;
  links:                  NewLinks;
  type:                   string;
  merge_strategies:       string[];
  default_merge_strategy: string;
}

export interface NewLinks {
  self:    Avatar;
  commits: Avatar;
  html:    Avatar;
}

export interface Target {
  type:       string;
  hash:       string;
  date:       Date;
  author:     Author;
  message:    string;
  summary:    Summary;
  links:      ParentLinks;
  parents:    Parent[];
  rendered:   Properties;
  properties: Properties;
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

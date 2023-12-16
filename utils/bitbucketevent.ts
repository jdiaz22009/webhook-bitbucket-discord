import { IComment } from "../interfaces/commit.comment.interface";
import { Commit } from "../interfaces/commit.create.interface";
import { PullRequest } from "../interfaces/pull.request.interface";
import { Push } from "../interfaces/push.interface";

export const onCommit = (payload: Commit): string => {
  const { actor } = payload;

  return `author ${actor.nickname ?? actor.display_name} is commit`;
};

export const onCommentCreate = (payload: IComment) => {
  const { actor, comment } = payload;

  return {
    author: actor.nickname ?? actor.display_name,
    link: actor.links.avatar.href,
    idcommit: comment.commit.hash,
    dateCommit: comment.created_on,
    message: "Se hizo un comentario:" + comment.content.html,
  };
};

export const onPush = (payload: Push) => {
  const { actor, push } = payload;

  return {
    author: actor.nickname ?? actor.display_name,
    link: actor.links.avatar.href,
    idcommit: push.changes[0].commits[0].hash,
    dateCommit: push.changes[0].commits[0].date,
    message: push.changes[0].commits[0].message,
  };
};

export const onPullRequest = (payload: PullRequest) => {
  const { actor, pullrequest } = payload;

  return {
    author: actor.nickname ?? actor.display_name,
    link: actor.links.avatar.href,
    idcommit: "ID PULL REQUEST " + pullrequest.id,
    dateCommit: pullrequest.created_on,
    message: `se va hacer un pull request de la siguiente forma:\n  Descripcion:\n ${pullrequest.description}\n
    Rama destino: ${pullrequest.destination.branch.name}\n
    Rama source: ${pullrequest.source.branch.name}\n
    Estado del PR: ${pullrequest.state}
    `,
  };
};

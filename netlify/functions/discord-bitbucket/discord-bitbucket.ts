import type { Context } from "@netlify/functions";
import { notify } from "../../../utils/notify";
import {
  onCommentCreate,
  onCommit,
  onPullRequest,
  onPush,
} from "../../../utils/bitbucketevent";

export default async (req: Request, context: Context) => {
  const bitbucketEvent = req.headers.get("x-event-key") ?? "unknown";

  const payload = await req.json();
  console.log(bitbucketEvent);
  console.log(JSON.stringify(payload));

  switch (bitbucketEvent) {
    case "repo:push":
      const push = onPush(payload);
      await notify(push);
      break;

    case "repo:commit_comment_created":
      const comment = onCommentCreate(payload);
      await notify(comment);
      break;

    case "pullrequest:created":
      const pull = onPullRequest(payload);
      console.log(pull);
      await notify(pull);
      break;

    case "pullrequest:rejected":
      const reject = "";
      console.log(payload);
      // await notify(comment);
      break;

    default:
      console.log(`Unknown event ${bitbucketEvent}`);
  }

  console.log(JSON.stringify(payload));

  return new Response(JSON.stringify({ message: "hello word" }));
};

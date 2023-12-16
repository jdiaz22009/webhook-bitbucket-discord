export const notify = async (params: any) => {
  const body = {
    content: "Hola te informo se acaba de hacer",
    embeds: [
      {
        title: params?.idcommit,
        description: params?.message,
        color: 1127128,
        timestamp: params?.dateCommit,
        author: {
          name: params?.author,
          url: params?.link,
          icon_url: params?.link,
        },
      },
    ],
  };

  const resp = await fetch(process.env.DISCORD_WEBHOOK_URL ?? "", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    console.log(resp);
    console.log("Error sending message to discord");
    return false;
  }

  return true;
};

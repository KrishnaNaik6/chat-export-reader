export default function parseChat(text) {
  const lines = text.split("\n");

  const messages = [];

  const senders = new Set();

  let currentMessage = null;

  const regex =
    /^(\d{1,2}\/\d{1,2}\/\d{2,4}),\s(.+?)\s-\s([^:]+):\s([\s\S]*)$/;

  lines.forEach((line) => {
    const match = line.match(regex);

    if (match) {
      if (currentMessage) {
        messages.push(currentMessage);
      }

      const sender = match[3];

      senders.add(sender);

      currentMessage = {
        id: crypto.randomUUID(),
        date: match[1],
        time: match[2],
        sender,
        message: match[4],
      };
    } else {
      if (currentMessage) {
        currentMessage.message += "\n" + line;
      }
    }
  });

  if (currentMessage) {
    messages.push(currentMessage);
  }

  return {
    messages,
    senders: Array.from(senders),
  };
}
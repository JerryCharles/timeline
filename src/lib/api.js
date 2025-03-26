export async function fetchTopics(page = 0, pageSize = 200) {
  const response = await fetch('https://tl-api.3ja.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      methodName: "getTopicInfos",
      paramInfo: { page, pageSize }
    }),
  });
  
  const data = await response.json();
  return data.data;
}

export async function fetchEvents(topicID, page = 0, pageSize = 300) {
  const response = await fetch('https://tl-api.3ja.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      methodName: "getEventInfos",
      paramInfo: { topicID, page, pageSize }
    }),
  });
  
  const data = await response.json();
  return data.data;
}
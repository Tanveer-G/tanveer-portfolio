const ANALYTICS_ENDPOINT = process.env.ANALYTICS_ENDPOINT || 'https://getanalyzr.vercel.app/api/events';

export async function trackServerEvent(name: string, props: Record<string, any>) {
  try {
    await fetch(ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: name,
        properties: props,
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => { /* ignore failures */ });
  } catch (error) {
    console.error('Server analytics error:', error);
  }
}
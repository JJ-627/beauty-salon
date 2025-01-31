export default function handler(req) {
    // Create CORS headers to allow cross-origin requests
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
      'Access-Control-Max-Age': '86400',
    }
  
    // Handle preflight requests (for CORS)
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          ...corsHeaders,
          'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        }
      })
    }
  
    // Main response
    return new Response(
      JSON.stringify({ 
        message: 'Hello from GitHub! 🚀',
        timestamp: new Date().toISOString(),
        status: 'Deployment Successful'
      }), 
      { 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        } 
      }
    )
  }
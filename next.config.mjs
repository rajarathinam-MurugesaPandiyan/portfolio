const nextConfig = {
    webpack: (config, { isServer }) => {
      // Suppress specific warnings about "No serializer registered for Warning"
      config.ignoreWarnings = [
        (warning) =>
          warning.message.includes('No serializer registered for Warning'),
      ];
  
      // Switch to memory cache strategy to avoid serialization issues
      config.cache = {
        type: 'memory',
      };
  
      // Optional: Log a message to confirm custom webpack settings
      if (!isServer) {
        console.log('Custom Webpack config applied');
      }
  
      return config;
    },
  };
  
  export default nextConfig;
  
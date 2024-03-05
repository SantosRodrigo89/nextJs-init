module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/perguntas",
        destination: "/faq/",
        permanent: true,
      },
      {
        source: "/sair",
        destination: "/api/auth/logout",
        permanent: true,
      }
    ];
  },
};

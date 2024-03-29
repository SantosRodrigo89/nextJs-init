import Head from 'next/head';
import Footer from '../../components/patterns/Footer';
import Link from '../../components/Link';
import { theme } from '../../theme/theme';
import { Image, Box, Text, Icon, Input, Button } from '../../theme/components';
import { useUser } from '@auth0/nextjs-auth0/client';

const LOGO_ALURA_URL = '/images/logo.png';
const SIDE_IMAGE_URL = '/images/photo.jpg';

function SideImage() {
  return (
    <Box
      styleSheet={{
        paddingHorizontal: {
          md: theme.space.x8,
        },
        marginHorizontal: {
          sm: 'auto',
        },
        maxWidth: {
          sm: theme.space.xcontainer_md,
        },
      }}
    >
      <Box
        styleSheet={{
          top: 0,
          bottom: 0,
          right: {
            lg: theme.space.x0,
          },
          width: {
            lg: theme.space['x1/2'],
          },
          paddingTop: {
            xs: theme.space.x12,
            sm: theme.space.x16,
          },
          paddingBottom: {
            lg: theme.space.x16,
          },
          position: {
            sm: 'relative',
            lg: 'absolute',
          },
        }}
      >
        <Box
          styleSheet={{
            height: {
              lg: theme.space['x1/1'],
            },
            maxWidth: {
              sm: theme.space.xcontainer_md,
              lg: 'none',
            },
            position: 'relative',
            paddingHorizontal: {
              sm: theme.space.x0,
            },
            paddingLeft: {
              lg: theme.space.x12,
            },
            marginRight: {
              lg: `-${theme.space.x40}`,
            },
            marginHorizontal: {
              sm: 'auto',
            },
          }}
        >
          <Image
            styleSheet={{
              boxShadow: `0 5px 16px 0px ${theme.colors.neutral[999]}73`,
              borderRadius: {
                md: theme.space.x4,
              },
              maxWidth: {
                lg: 'none',
              },
              width: {
                lg: 'auto',
              },
              height: {
                lg: theme.space['x1/1'],
              },
            }}
            src={SIDE_IMAGE_URL}
            alt='estatua de prometheu e logo'
          />
        </Box>
      </Box>
    </Box>
  );
}

export default function HomeScreen() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <Box>
        <Head>
          <title> Prometech Labs - Seu Parceiro em Desenvolvimento de Sites!</title>
        </Head>
        <Box
          as='main'
          styleSheet={{
            flex: 1,
            backgroundColor: theme.colors.neutral['050'],
          }}
        >
          <Box
            styleSheet={{
              overflow: 'hidden',
              position: {
                lg: 'relative',
              },
              paddingTop: {
                xs: theme.space.x6,
                sm: theme.space.x12,
              },
              paddingVertical: {
                md: theme.space.x20,
                lg: theme.space.x24,
              },
            }}
          >
            <Box
              styleSheet={{
                marginHorizontal: 'auto',
                paddingHorizontal: {
                  xs: theme.space.x4,
                  sm: theme.space.x6,
                  lg: theme.space.x8,
                },
                maxWidth: {
                  sm: theme.space.xcontainer_md,
                  lg: theme.space.xcontainer_lg,
                },
                display: {
                  lg: 'grid',
                },
                gap: {
                  lg: theme.space.x24,
                },
                gridTemplateColumns: {
                  lg: 'repeat(2, minmax(0, 1fr))',
                },
              }}
            >
              <Box>
                <Box>
                  <Image
                    styleSheet={{
                      width: 'auto',
                      height: theme.space.x32,
                    }}
                    src={LOGO_ALURA_URL}
                    alt='Logo Prometech Labs'
                  />
                </Box>
                <Box
                  styleSheet={{
                    marginTop: {
                      xs: theme.space.x16,
                      sm: theme.space.x20,
                    },
                  }}
                >
                  <Box>
                    <Link
                      href='/faq'
                      styleSheet={{
                        display: 'inline-flex',
                        alignItems: {
                          xs: 'flex-start',
                          sm: 'center',
                        },
                        flexDirection: {
                          xs: 'column',
                          sm: 'row',
                        },
                      }}
                    >
                     
                      <Text
                        styleSheet={{
                          textVariant: theme.typography.variants.body4,
                          fontWeight: '600',
                          borderRadius: theme.space.x64,
                          color: theme.colors.primary['400'],
                          backgroundColor: theme.colors.primary['100'],
                          paddingHorizontal: theme.space['x2.5'],
                          paddingVertical: theme.space['x1'],
                          marginRight: theme.space.x2,
                          marginBottom: {
                            xs: theme.space.x2,
                            sm: theme.space.x0,
                          },
                        }}
                      >
                        O que tem de novo?
                      </Text>
                      <Text
                        styleSheet={{
                          textVariant: theme.typography.variants.body4,
                          fontWeight: '600',
                          display: 'inline-flex',
                          borderRadius: theme.space.x64,
                          color: theme.colors.primary['400'],
                          alignItems: 'center',
                        }}
                      >
                        <Text>Confira as principais dúvidas</Text>
                        <Icon
                          styleSheet={{
                            iconVariant: 'chevronRight',
                            marginLeft: theme.space.xpx,
                          }}
                          aria-hidden='true'
                        />
                      </Text>
                    </Link>
                    <Link href={'/sair'}>Logout</Link>
                  </Box>
                  <Box
                    styleSheet={{
                      marginTop: theme.space.x6,
                      maxWidth: theme.space.xcontainer_sm,
                    }}
                  >
                    <Text
                      as='h1'
                      styleSheet={{
                        textVariant: theme.typography.variants.heading1,
                        color: theme.colors.neutral['900'],
                      }}
                    >
                      Prometech Labs
                    </Text>
                    <Text
                      as='p'
                      styleSheet={{
                        textVariant: theme.typography.variants.body1,
                        color: theme.colors.neutral['500'],
                        marginTop: theme.space.x6,
                      }}
                    >
                      Bem-vindo à Prometech Labs - Seu Parceiro em Desenvolvimento de Sites! Somos especializados em
                      React e Node.js, criando sites atraentes e eficientes. Oferecemos soluções personalizadas,
                      garantindo desempenho e suporte contínuo.
                    </Text>
                    <Text
                      as='p'
                      styleSheet={{
                        textVariant: theme.typography.variants.body1,
                        color: theme.colors.neutral['500'],
                        marginTop: theme.space.x6,
                      }}
                    >
                      Contate-nos para transformar sua visão digital em realidade!
                    </Text>
                  </Box>
                  <Box
                    as='form'
                    action='#'
                    styleSheet={{
                      display: {
                        sm: 'flex',
                      },
                      marginTop: theme.space.x12,
                      width: {
                        sm: theme.space['x1/1'],
                      },
                      maxWidth: {
                        sm: theme.space.xcontainer_lg,
                      },
                    }}
                  >
                    <Box
                      styleSheet={{
                        minWidth: 0,
                        flex: 1,
                      }}
                    >
                      <Text
                        as='label'
                        htmlFor='email'
                        styleSheet={{
                          srOnly: true,
                        }}
                      >
                        Email address
                      </Text>
                      <Input id='email' type='email' placeholder='Coloque seu email aqui' />
                    </Box>
                    <Box
                      styleSheet={{
                        marginTop: {
                          xs: theme.space.x4,
                          sm: theme.space.x0,
                        },
                        marginLeft: {
                          sm: theme.space.x3,
                        },
                      }}
                    >
                      <Button
                        type='submit'
                        // button variant
                      >
                        Cadastrar
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <SideImage />
          </Box>
        </Box>
        <Footer />
      </Box>
    );
  }

  return <Link href='/api/auth/login'>Login</Link>;
}

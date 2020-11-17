import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Nav from '../components/nav'
import Image from 'next/image'

import { Button, Heading, Link } from "@chakra-ui/core";

const name = "Victor Toh"
export const siteTitle = name+"'s Website"

export default function Layout({ children, home }) {
  return (
    <>
    <Nav />
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              src="/images/profile.jpg"
              alt={name}
              width={200}
              height={200}
            />
            <Heading as="h1" size="xl">{name}</Heading>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
              <Image
              src="/images/profile.jpg"
              alt={name}
              width={100}
              height={100}
            />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <Button bgColor="brand.500">{name}</Button>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <Button>← Back to home</Button>
          </Link>
        </div>
      )}
    </div>
    </>
  )
}
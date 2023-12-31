'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ClientSafeProvider, getProviders, LiteralUnion, signIn, signOut, useSession } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';

export const Nav = () => {
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider> | null>(
    null
  );
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getProviders();
      setProviders(response);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={'/'} className="flex gap-2 flex-center">
        <Image src={'/assets/images/logo.svg'} alt={'logo'} width={30} height={27} className={'object-contain'} />
        <p className={'logo_text'}>atsybulskiy</p>
      </Link>
      {status !== 'loading' && (
        <>
          <div className={'sm:flex hidden'}>
            {session?.user ? (
              <div className={'flex gap-3 md:gap-5'}>
                <Link href={'/create-prompt'} className={'black_btn'}>
                  Create Post
                </Link>
                <button type={'button'} onClick={() => signOut()} className={'outline_btn'}>
                  Sign Out
                </button>

                <Link href={'/profile'}>
                  <Image
                    src={session.user.image || '/assets/images/logo.svg'}
                    alt={''}
                    width={34}
                    height={34}
                    className="rounded-full"
                  />
                </Link>
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type={'button'}
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className={'black_btn'}
                    >
                      Sign In
                    </button>
                  ))}
              </>
            )}
          </div>
          {/* Mobile Navigation */}
          <div className="sm:hidden flex relative">
            {session?.user ? (
              <div className="flex">
                <Image
                  src={session.user.image || '/assets/images/logo.svg'}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                  onClick={() => setToggleDropdown(!toggleDropdown)}
                />

                {toggleDropdown && (
                  <div className="dropdown">
                    <Link href="/profile" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                      My Profile
                    </Link>
                    <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                      Create Prompt
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className="mt-5 w-full black_btn"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                      className="black_btn"
                    >
                      Sign in ({provider.name})
                    </button>
                  ))}
              </>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

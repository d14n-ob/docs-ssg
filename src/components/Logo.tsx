
export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" {...props}>
      <image xmlns="http://www.w3.org/2000/svg" width="48" height="48" xmlnsXlink="http://www.w3.org/1999/xlink"
      href='/logo.webp' />
    </svg>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 300 48" fill="none" {...props}>
      <image xmlns="http://www.w3.org/2000/svg" width="300" height="48" xmlnsXlink="http://www.w3.org/1999/xlink"
      href='/banner.webp' />
    </svg>
  )
}

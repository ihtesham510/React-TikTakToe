import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
const AppContainer: React.FC<Props> = ({ children }) => {
  return (
    <html>
      <head>
        <title>Tik Tak Toe Game</title>
        <link href='https://api.fontshare.com/v2/css?f[]=excon@500&display=swap' rel='stylesheet' />
      </head>
      <body className='font-excon'>{children}</body>
    </html>
  )
}

export default AppContainer

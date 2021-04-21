import React from 'react';
import { useRouter } from 'next/router'

interface Props {
}

const Post = (props: Props) => {
    const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>

};

export default Post;

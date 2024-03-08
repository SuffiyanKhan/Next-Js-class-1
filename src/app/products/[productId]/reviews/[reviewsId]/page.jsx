import React from 'react'

export default function ReviewsPage({params}) {
    console.log(params.reviewsId)
  return (
    <div>Reviews Page {params.reviewsId}</div>
  )
}

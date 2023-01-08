import React from 'react';
import freequotecss from "./Free_quote.css"

export default function Free_quote(props) {
  return (
    <div className="claim_free_quote_container">
    <div className="claim_free_quote">
    <p>{props.title}</p>
    <div>Claim a Free Quote</div>
    </div>
    </div>
  )
}

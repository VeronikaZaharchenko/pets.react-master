import {Link} from 'react-router-dom'
import React from 'react'

const Pagination = () => {
    return (
    <div>
        <nav aria-label="Page navigation example" className="m-3">
  <ul className="pagination">
      <li className="page-item">
      <Link to={'/'}><div className="page-link text-black" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
          </div></Link>
      </li>
      <li className="page-item"><Link to={'/profile'}><div className="page-link text-black">2</div></Link></li>
      <li className="page-item"><Link to={'/new_pet'}><div className="page-link text-black">3</div></Link></li>
      <li className="page-item">
      <Link to={'/search/order'}><div className="page-link text-black" aria-label="Next">  
              <span aria-hidden="true">&raquo;</span>
          </div></Link>
      </li>
  </ul>
</nav>
    </div>
    )
    }

export default Pagination
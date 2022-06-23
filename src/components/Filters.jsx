import {Link, useParams} from 'react-router-dom';

const Filters = () => {
  const {filter: activeFilter = 'all'} = useParams();

  return (
    <div className='three ui buttons' style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
      <Link className='ui button' to="/all" >all</Link>
      <Link className='ui button' to="/active" >active</Link>
      <Link className='ui button' to="/completed" >completed</Link>
    </div>
  )
}

export {Filters};

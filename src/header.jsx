
export default function Header()
{
  return (
    <div>
    <MainHeader/>
    <SubHeader/>
    </div>
  );
}

function MainHeader()
{
  return (
    <h1>REACT COURSE!</h1>
  );
}

function SubHeader()
{
  return (<p>This is an <i>exciting course!</i></p>);
}

// export default Header

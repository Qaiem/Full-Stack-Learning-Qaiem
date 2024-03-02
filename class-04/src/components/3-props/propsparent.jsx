import propscomp from './propscomp'

const propsparent = (props) => {
  console.log(props);

  let myclass1="class01"
  let myclass2="class02"
  let myclass3="class03"

  return (
    <div>
      <propscomp mynam="Qaiem" anything={myclass1} />
      <propscomp mynam="GAMER" anything={myclass2} />
      <propscomp mynam="HYPER" anything={myclass3} />
    </div>
  );
};

export default propsparent;

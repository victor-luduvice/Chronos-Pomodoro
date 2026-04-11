type DefaultInputProps = {
  id: String;
} & React.ComponentProps<'input'>;

export function DefaultInput({id, type }: DefaultInputProps){
  return(
      <>
      <label htmlFor='meuInput'> task</label>
      < input id={id} type={type}/>
      </>
  );
}
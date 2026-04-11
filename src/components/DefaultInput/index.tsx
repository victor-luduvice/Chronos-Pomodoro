type DefaultInputProps = {
  id: String;
  labelText ?: String; 
} & React.ComponentProps<'input'>;

export function DefaultInput({id, type, labelText, ...res}: DefaultInputProps){
  return(
      <>
      <label htmlFor={id}>{labelText}</label>
      < input id={id} type={type} {...res}/>
      </>
  );
}
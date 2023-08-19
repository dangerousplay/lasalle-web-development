'use client'

import { PropsWithChildren } from "react";
import { w } from "windstitch";
import {useField, useFormik, Form, Formik} from "formik";
import * as Yup from 'yup';

type Props = PropsWithChildren<{}>;

const Base = w.div(`
  p-6 text-14
`);

const Description = w.section(``);


const TextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <div className={'flex flex-col space-y-3'}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="invalid:border-red-1 dark:bg-gray-3 dark:hover:bg-gray-5 text-14 p-1" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="text-red-10 font-bold">{meta.error}</div>
            ) : null}
        </div>
    );
};

const NumberInput = ({ ...props }) => {
    return (
        <TextInput {...props} type="number" />
    )
};

const DateInput = ({ ...props }) => {
    return (
        <TextInput {...props} type="date" />
    )
};

const Checkbox = ({ label, ...props }) => {
    // React treats radios and checkbox inputs differently from other input types: select and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div className="gap-3 flex flex-row" >
            <input type="checkbox" {...field} {...props} />
            <label htmlFor={props.id || props.name}>{label.split('\n').map(t => <p>{t}</p>)}</label>
            {meta.touched && meta.error ? (
                <div className="text-red-10 font-bold">{meta.error}</div>
            ) : null}
        </div>
    );
};

const Select = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={'gap-3 flex flex-col'}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select className={'dark:bg-gray-3 dark:hover:bg-gray-5 text-14 p-1'} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="text-red-10 font-bold">{meta.error}</div>
            ) : null}
        </div>
    );
};

const TextArea = ({ label, className = '', ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <div className={`space-y-6 flex flex-col ${className}`}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea {...field} {...props}/>
            {meta.touched && meta.error ? (
                <div className="text-red-10 font-bold">{meta.error}</div>
            ) : null}
        </div>
    );
};

const RadioGroup = ({ options, legend, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'radio' });
    return (
        <fieldset className={'pt-3'}>
            <legend>{legend}</legend>
            {Object.keys(options).map((o: string) => {
                const id = `sex_${o}`
                return (
                    <div className="space-x-2" key={o}>
                        <input type="radio" {...props} value={o} id={id}/>
                        <label className="checkbox-input" htmlFor={id}>
                            {options[o]}
                        </label>
                    </div>
                )
            })}

            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </fieldset>
    );
};



const bloodTypes = ['A', 'B', 'AB', 'O']
const bloodRhTypes = ['+', '-']

const sexTypes = {
    m: 'Masculino',
    f: 'Feminino'
}


export default function RegisterLayout(props: Props) {
  const { children } = props;

  // language=JSRegexp
    return (
    <>
      <Base>
        <Description>
            <h1 className="text-4xl font-bold">Dados de Informações do Doador</h1>
            <p className="mt-4">
            </p>
        </Description>
          <Formik
              initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  acceptedTerms: false, // added for our checkbox
                  jobType: '', // added for our select
              }}
              validationSchema={Yup.object({
                  name: Yup.string()
                      .max(15, 'Must be 15 characters or less')
                      .min(3)
                      .required('Required'),
                  username: Yup.string()
                      .max(15, 'Must be 3 characters or less')
                      .min(3)
                      .required('Required'),
                  password: Yup.string()
                      .max(3, 'Must be 3 characters or less')
                      .min(3)
                      .required('Required'),
                  email: Yup.string()
                      .email('Invalid email address')
                      .required('Required'),
                  cellphone: Yup.string()
                      .matches(/[0-9]{2}-[0-9]{8}/, 'Must be in format 51-99999999')
                      .required('Required'),
                  weight: Yup.number()
                      .positive()
                      .max(250),
                  bloodType: Yup.string()
                      .oneOf(
                          bloodTypes,
                          'Invalid blood type'
                      )
                      .required('Required'),
                  bloodRhType: Yup.string()
                      .oneOf(
                          bloodRhTypes,
                          'Invalid blood rh type'
                      )
                      .required('Required'),
                  sex: Yup.string()
                      .oneOf(Object.keys(sexTypes))
                      .required('Required'),
                  agreeTerms: Yup.bool()
                      .isTrue('You should accept the terms')
                      .required()
              })}
              onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                  }, 400);
              }}
          >
              <Form className="gap-3 grid sm:grid-cols-1 md:grid-cols-2">
                  <TextInput
                      label="Nome"
                      name="name"
                      type="text"
                      placeholder="Joao da Silva"
                  />

                  <TextInput
                      label="Username"
                      name="username"
                      type="text"
                      placeholder="joao_silva"
                  />

                  <TextInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="user@email.com"
                  />

                  <TextInput
                      label="Telefone"
                      name="cellphone"
                      type="tel"
                      pattern="[0-9]{2}-[0-9]{8}"
                      placeholder="51-99999999"
                  />

                  <DateInput label="Data de nascimento" name="birthDate" placeholder="01/01/2000" />

                  <NumberInput label="Peso KG" name="weight" placeholder="70"/>

                  <Select label="Tipo sanguíneo" name="bloodType">
                      {bloodTypes.map((t) => <option key={t}>{t}</option>)}
                  </Select>

                  <Select label="Fator RH" name="bloodRhType">
                      {bloodRhTypes.map((t) => <option key={t}>{t}</option>)}
                  </Select>

                  <RadioGroup options={sexTypes} legend={'Sexo'} name="sex" />

                  <TextInput
                      label="Número do documento"
                      name="id"
                      type="text"
                      placeholder="999.999.785-45"
                  />

                  <fieldset className="space-y-3 col-span-2">
                      <legend>Informações adicionais</legend>
                      <Checkbox label={
                          "Estar descansado (ter dormido pelo menos 6 horas nas últimas 24 horas)\n" +
                          "Estar alimentado, evitando alimentos gordurosos\n" +
                          "Não tem com anemia no teste realizado imediatamente antes da doação\n" +
                          "Não tem com hipertensão ou hipotensão arterial no momento da doação\n" +
                          "Não está com aumento ou diminuição dos batimentos cardíacos no momento da doação\n" +
                          "Não está com febre no dia da doação"
                      } name='agreeTerms' />
                  </fieldset>

                  <TextArea name='comment' label='Observações' className='col-span-2 w-full max-w-full' cols={40} rows={15} />

                  <button type="submit" className={'col-span-2'}>Enviar</button>





                  {/*<p>*/}
                  {/*    Títilo do Formulário: Dados de Informações do Doador*/}
                  {/*    Cabeçalho do Formulário: Dados de Informações*/}
                  {/*    Nome: Campo de Texto*/}
                  {/*    Usuário: Campo Texto*/}
                  {/*    Senha: Campo password*/}
                  {/*    E-mail: Campo tipo e-mail*/}
                  {/*    Telefone: Campo tipo nº telefônico. Formatar como 51-99999999*/}
                  {/*    Data de nascimento: Campo de data, calcular a idade e mostrar em um texto ao lado com o Label Idade*/}
                  {/*    Peso (kg): Campo numérico*/}
                  {/*    Tipo Sanguineo: Lista drop-dow com as opções: O, A, B, AB. Sem opção escolhida*/}
                  {/*    Fator RH: Lista drop-dow com as opções: +, -. Sem opção escolhida*/}
                  {/*    Sexo: Opções, Feminino e Masculino. Campo tipo Radio Button. Sem opção marcada*/}
                  {/*    Número do documento: Campo Texto*/}

                  {/*    Campos CheckBox, agrupar esses campos abaixo, colocando um box em volta das perguntas abaixo, com*/}
                  {/*    o label Informações Adicionais*/}
                  {/*    Estar descansado (ter dormido pelo menos 6 horas nas últimas 24 horas)*/}
                  {/*    Estar alimentado, evitando alimentos gordurosos*/}
                  {/*    Não tem com anemia no teste realizado imediatamente antes da doação*/}
                  {/*    Não tem com hipertensão ou hipotensão arterial no momento da doação*/}
                  {/*    Não está com aumento ou diminuição dos batimentos cardíacos no momento da doação*/}
                  {/*    Não está com febre no dia da doação*/}
                  {/*    Observações: Campo área de texto com 15 linhas e 40 colunas.*/}
                  {/*    Botão: Enviar*/}
                  {/*</p>*/}
              </Form>
          </Formik>

        {children}
      </Base>
    </>
  );
}

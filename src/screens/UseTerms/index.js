import React from "react";
import {
  Container,
  TermArea,
  TextNormal,
  TextBold,
  ConfirmButtom,
} from "./style";
import Header from "../../components/Header/header";
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation=useNavigation();
  return (
    <Container>
      <Header title="Terms & Conditions" onPress={()=>navigation.goBack()} />
      <TermArea>
        <TextNormal>Termo De Uso</TextNormal>
        <TextNormal>Última revisão em 10/02/2021</TextNormal>
        <TextNormal>1. Aceitação dos Termos de uso.</TextNormal>
        <TextNormal>
          Ao criar uma conta no Dubhe, seja através de dispositivo móvel,
          aplicativo móvel ou computador (coletivamente, o “Serviço”), você
          concorda em vincular-se (i) aos presentes Termos de Uso, (ii) a nossa
          Política de Privacidade, nossa Política de Cookies, nossos
          Procedimentos Arbitrais (se aplicáveis a você) e nossas Dicas de
          Segurança, cada qual será incorporado a este Contrato por referência,
          bem como (iii) quaisquer termos divulgados e assinados por você ao
          adquirir recursos adicionais, produtos ou serviços que oferecemos no
          Serviço (coletivamente, este “Contrato”). Se você não aceita e não
          concorda em vincular-se aos termos deste Contrato, não utilize o nosso
          Serviço.
        </TextNormal>
        <TextNormal>
          Podemos alterar este Contrato e o Serviço periodicamente. Podemos
          fazê-lo por diversas razões, inclusive para refletir as alterações ou
          exigências legais, novos recursos ou mudanças nas práticas comerciais.
          A versão mais recente deste Contrato será publicada no Serviço, em
          Configurações, e também no Dubhe.com; você deve consultar a versão
          mais recente regularmente. A versão mais recente é a que se aplica. Se
          as alterações incluírem emendas significativas que afetam os seus
          direitos ou obrigações, você será notificado antecipadamente a
          respeito, por meios razoáveis, o que pode incluir notificação por meio
          do Serviço ou por e-mail. Se você continuar a utilizar o Serviço após
          as alterações entrarem em vigor, isso significa que você concorda com
          o Contrato revisado.
        </TextNormal>
        <TextNormal>2. Qualificação.</TextNormal>
        <TextNormal>
          Você deve ter, no mínimo, 18 anos de idade para criar uma conta no
          Dubhe e utilizar o Serviço. Ao criar uma conta e utilizar o Serviço,
          você declara e garante que: 
          <TextNormal>você pode firmar um contrato vinculativo
          com Dubhe, não está impedido de utilizar o Serviço nos termos das leis
          da Italia ou outra jurisdição aplicável, o que significa que você não
          está incluído na lista de cidadãos especialmente designados do
          Departamento do Tesouro dos EUA, ou sujeito a qualquer outra proibição
          semelhante;cumprirá este Contrato e todas as leis, normas e
          regulamentos municipais, estaduais, nacionais e internacionais
          aplicáveis e você nunca foi condenado por crime ou ofensa grave (ou
          qualquer crime de mesma gravidade), crime de assédio sexual, ou
          qualquer crime que envolva violência, e que você não é obrigado a se
          registrar no cadastro de criminosos sexuais de qualquer estado,
          federação ou local.</TextNormal>
        </TextNormal>
        <TextNormal>3. Sua conta.</TextNormal>
        <TextNormal>
          Para usar o Dubhe, você pode acessar usando suas credenciais do
          Facebook. Se o fizer, você nos autoriza a acessar e utilizar
          determinadas informações da sua conta do Facebook, inclusive, entre
          outras, o seu perfil público no Facebook. Para saber mais sobre as
          informações que coletamos de você e como as utilizamos, consulte a
          nossa Política de Privacidade.
        </TextNormal>
        <TextNormal>
          Você é responsável por manter a confidencialidade de suas credenciais
          de login que utiliza para se conectar ao Dubhe, além de ser o único
          responsável por todas as atividades associadas ao uso dessas
          credenciais. Se você acredita que alguém obteve acesso à sua conta,
          entre em contato conosco imediatamente.
        </TextNormal>
        <TextNormal>4. Alteração do Serviço e Rescisão.</TextNormal>
        <TextNormal>
          O Dubhe está empenhado em melhorar o Serviço e a oferecer
          funcionalidades adicionais que possam ser úteis e interessantes para
          você. Isso significa que podemos incluir novos recursos ou aprimorar
          produtos ao longo do tempo, bem como remover alguns recursos e, se
          essas ações não afetarem os seus direitos e obrigações
          significativamente, talvez não forneceremos aviso prévio antes de
          removê-los. Podemos até mesmo suspender totalmente o Serviço, caso em
          que você será notificado com antecedência, a menos que circunstâncias
          atenuantes, como questões de segurança, impeçam-nos de fazê-lo.
        </TextNormal>
        <ConfirmButtom onPress={()=>navigation.navigate("Activities")}>
            <TextBold>OK</TextBold>
        </ConfirmButtom>
      </TermArea>
    </Container>
  );
};

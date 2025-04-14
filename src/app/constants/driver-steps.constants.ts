import { DrivePosition, DriveAlign } from '../enums/driver.enum';

export const DRIVER_STEPS = {
  LOGO: {
    id: 'step1',
    title: 'Logo',
    description: 'Este é o logo da nossa aplicação',
    drivePosition: DrivePosition.OVER,
    driveAlign: DriveAlign.START
  },
  ABOUT: {
    id: 'step2',
    title: 'Sobre',
    description: 'Clique aqui para saber mais sobre nós',
    drivePosition: DrivePosition.BOTTOM,
    driveAlign: DriveAlign.CENTER
  },
  CONTACT: {
    id: 'step3',
    title: 'Contato',
    description: 'Entre em contato conosco',
    drivePosition: DrivePosition.BOTTOM,
    driveAlign: DriveAlign.END
  },
  WELCOME: {
    id: 'step4',
    title: 'Boas-vindas',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the, when an unknown printer ' +
      'took a galley of type and scrambled it to make a type specimen book. It has survived not only ' +
      'five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' +
      'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ' +
      'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    drivePosition: DrivePosition.RIGHT,
    driveAlign: DriveAlign.START
  },
  CONTENT: {
    id: 'step5',
    title: 'Conteúdo',
    description: 'Área principal de conteúdo',
    drivePosition: DrivePosition.LEFT,
    driveAlign: DriveAlign.CENTER
  }
} as const;

export const TOUR_STEPS = [
  DRIVER_STEPS.LOGO.id,
  DRIVER_STEPS.ABOUT.id,
  DRIVER_STEPS.CONTACT.id,
  DRIVER_STEPS.WELCOME.id,
  DRIVER_STEPS.CONTENT.id
] as const;
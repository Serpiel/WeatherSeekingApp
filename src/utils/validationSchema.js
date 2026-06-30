import Joi from 'joi';

// Définition de la règle Regex pour un mot de passe fort
// Au moins 1 minuscule, 1 majuscule, 1 chiffre, et minimum 8 caractères
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } }) // Désactive la vérification stricte des TLD qui peut bugger sur React Native
    .required()
    .messages({
      'string.empty': 'L\'adresse email est obligatoire.',
      'string.email': 'Veuillez entrer une adresse email valide.',
    }),

  password: Joi.string()
    .pattern(passwordRegex)
    .required()
    .messages({
        'string.empty': 'Le mot de passe est obligatoire.',
        'string.pattern.base': 'Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre.',
    }),
});
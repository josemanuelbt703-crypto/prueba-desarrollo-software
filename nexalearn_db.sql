-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-09-2026 a las 02:25:08
-- Versión del servidor: 11.8.2-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nexalearn_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Desarrollo Web', '2026-09-12 03:34:26', '2026-09-12 03:34:26'),
(2, 'Inteligencia Artificial', '2026-09-12 03:34:26', '2026-09-12 03:34:26'),
(3, 'Ciencia de Datos', '2026-09-12 03:34:26', '2026-09-12 03:34:26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `image` varchar(255) NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `courses`
--

INSERT INTO `courses` (`id`, `title`, `description`, `price`, `image`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'React desde cero - Actualizado', 'Aprende los fundamentos de React y desarrolla interfaces modernas.', 329.00, 'https://placehold.co/600x400?text=React', 1, '2026-09-12 03:34:26', '2026-09-12 03:57:36'),
(2, 'Laravel API', 'Construye APIs REST utilizando Laravel.', 349.00, 'https://placehold.co/600x400?text=Laravel', 1, '2026-09-12 03:34:26', '2026-09-12 03:34:26'),
(3, 'Introducción a Inteligencia Artificial', 'Conoce los fundamentos y aplicaciones actuales de la IA.', 399.00, 'https://placehold.co/600x400?text=IA', 2, '2026-09-12 03:34:26', '2026-09-12 03:34:26'),
(4, 'Machine Learning con Python', 'Construye modelos básicos de aprendizaje automático.', 449.00, 'https://placehold.co/600x400?text=Machine+Learning', 2, '2026-09-12 03:34:26', '2026-09-12 03:34:26'),
(5, 'SQL para análisis de datos', 'Aprende consultas SQL orientadas al análisis de información.', 249.00, 'https://placehold.co/600x400?text=SQL', 3, '2026-09-12 03:34:26', '2026-09-12 03:34:26'),
(13, 'Python para Data Science', 'Analiza y transforma datos utilizando Python.', 379.00, 'https://placehold.co/600x400?text=Python', 3, '2026-09-13 01:25:50', '2026-09-13 04:38:01'),
(14, 'Node.js para Backend', 'Aprende desarrollo backend utilizando Node.js.qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', 399.00, 'https://placehold.co/600x400?text=Node.js', 1, '2026-09-13 02:05:31', '2026-09-13 23:26:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '2026_09_11_215958_create_categories_table', 1),
(3, '2026_09_11_220259_create_courses_table', 1),
(4, '2026_09_12_161628_create_personal_access_tokens_table', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 5, 'nexalearn-token', 'bf8c63659041c53286fe154bdc55747422e876debe16c86ac8a0e8ba539f66c6', '[\"*\"]', '2026-09-13 01:54:45', NULL, '2026-09-13 00:53:09', '2026-09-13 01:54:45'),
(2, 'App\\Models\\User', 1, 'nexalearn-token', 'f7eeccc780e4f6e99d98afa5c55d88c8e2dd6fe93bc9b306112fe91c94096c70', '[\"*\"]', NULL, NULL, '2026-09-13 01:09:57', '2026-09-13 01:09:57'),
(3, 'App\\Models\\User', 1, 'nexalearn-token', 'dfb958362785cb2e06e30da7bff6084ccff09c42d3013f70c55b063614e398a4', '[\"*\"]', NULL, NULL, '2026-09-13 01:13:00', '2026-09-13 01:13:00'),
(4, 'App\\Models\\User', 6, 'nexalearn-token', '8787205d541624a8556f42210aa746121e84108b58776a4fc292433d4fc23d18', '[\"*\"]', '2026-09-13 02:17:22', NULL, '2026-09-13 01:27:47', '2026-09-13 02:17:22'),
(5, 'App\\Models\\User', 7, 'nexalearn-token', '5ece0e6a85212089bd2e617253c2adb9cd0bde4782f6c4f8e61c0bd9a5bf538f', '[\"*\"]', '2026-09-13 02:17:49', NULL, '2026-09-13 02:02:16', '2026-09-13 02:17:49'),
(6, 'App\\Models\\User', 6, 'nexalearn-token', '86ba3c60f6a50a39e1b1b910922a1aad57ec7c4e0d171cda47b9f5af7ca7a9e4', '[\"*\"]', NULL, NULL, '2026-09-13 02:18:32', '2026-09-13 02:18:32'),
(15, 'App\\Models\\User', 6, 'nexalearn-token', '7cbfdb259c65a86afa1b4c1bae4d7e7f2007ee6960421ea006f1d0d2005cb2f4', '[\"*\"]', '2026-09-13 22:21:41', NULL, '2026-09-13 22:21:38', '2026-09-13 22:21:41'),
(16, 'App\\Models\\User', 6, 'nexalearn-token', '0273016cffb943d6a7a99181eceb8cb53574039ed8b2953f5468314bf68ea506', '[\"*\"]', '2026-09-13 22:22:10', NULL, '2026-09-13 22:22:02', '2026-09-13 22:22:10'),
(17, 'App\\Models\\User', 6, 'nexalearn-token', 'f74c5e12ad8e939dd0cb1e277a01ff278e31582c3078ae7a815141fb1b035b22', '[\"*\"]', '2026-09-13 22:23:02', NULL, '2026-09-13 22:22:56', '2026-09-13 22:23:02'),
(18, 'App\\Models\\User', 6, 'nexalearn-token', 'eda290f56a5c98b6121fe436c4316d5d02d0556a3434e6ac59d5e06e2076b204', '[\"*\"]', '2026-09-13 22:24:25', NULL, '2026-09-13 22:23:53', '2026-09-13 22:24:25'),
(19, 'App\\Models\\User', 6, 'nexalearn-token', '54f98786ac95037e92d9a1f5eb052cd9f54f289f94669b7cf109c8a56831e053', '[\"*\"]', NULL, NULL, '2026-09-13 22:49:47', '2026-09-13 22:49:47'),
(20, 'App\\Models\\User', 6, 'nexalearn-token', 'becffe9beb0e7dbcb1850cdcaa3ca3d296b64fee98f2e245a0a4b53645082d67', '[\"*\"]', NULL, NULL, '2026-09-13 22:50:03', '2026-09-13 22:50:03'),
(21, 'App\\Models\\User', 6, 'nexalearn-token', 'ec047dec0c0374b7cbc0c7856e9175d39d00c2c821a76b33f3c0c729ca52a7f6', '[\"*\"]', NULL, NULL, '2026-09-13 22:50:05', '2026-09-13 22:50:05'),
(22, 'App\\Models\\User', 6, 'nexalearn-token', '366ceaf4947d756a500665cd5e8a074dc113b7ea49ea295e624df86305f889b6', '[\"*\"]', NULL, NULL, '2026-09-13 22:50:07', '2026-09-13 22:50:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('H5rIu9mVyCfWDBBJNVHBNzAhlZLFgWQvvpvMug0c', NULL, '127.0.0.1', 'PostmanRuntime/2.6.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiekVBQ2xjbnlzRTBYWFdDeEJ5bm5XTEJpWnNPSFByenhnWGpGS0xBQSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1789243983),
('lHjJ1V3dyi8d0FgbxsasSg7hQuu181WGfTEbXlYL', NULL, '127.0.0.1', 'PostmanRuntime/2.6.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiS0ZTSEFpQTJ4dHQ0a0oxVFZZdWpZNU95NGxwbE9iOTkxbzhTY0ZpNCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1789167264),
('NiFHiIDLWwVsBBnnyDClwfhoK7ALVpounn3STvTz', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36 Edg/152.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiblZHY1NLRG1TaUdOU1l3NGtzVHNtc0lydUxIa2lKQUNONWg3WGRPayI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1789166651),
('Unpt7Ogkl13r0Hk5y7mYEUAsiF9QNCKEFNsYY1WH', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.137.0 Chrome/148.0.7778.280 Electron/42.10.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZVRYS1VqcEFaM0k2VGFrTlUzcHNUV1NEUnlCekJaUWF2eVg2NDFYYyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1789166642),
('W81dF6ihhj63cKU9PGRmS3EIlM6Ea8Pi2Z5Fp4bb', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36 Edg/152.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMktaVDJ0ZDIyR2ZxSDA1YnNsMEIwaW1sYk4zalNWRzljd3Y4T3RRZSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1789262006);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Usuario Prueba', 'user@nexalearn.com', 'user', NULL, '$2y$12$Cs4bmw1oBvNPFJa7L..Y9ejoJme6QnhKA6FERk0DIZg0JkG9KfyYi', NULL, '2026-09-13 00:36:42', '2026-09-13 00:36:42'),
(2, 'Usuario Prueba 2', 'usuario2@nexalearn.com', 'user', NULL, '$2y$12$JXo3TzQY0pr2Lj16yTw4Be3VjRPRR5vQi2cm3xfILfT3aMAgwDbfm', NULL, '2026-09-13 00:43:46', '2026-09-13 00:43:46'),
(3, 'Usuario Prueba 3', 'usuario3@nexalearn.com', 'user', NULL, '$2y$12$iekwFZxNyNeBvby6t07zOeRR5Gto9zUrCA2oWY9Pam8L/Ky13NRVC', NULL, '2026-09-13 00:44:56', '2026-09-13 00:44:56'),
(4, 'Usuario Prueba 4', 'usuario4@nexalearn.com', 'user', NULL, '$2y$12$CgJk4D/2JOYX31gEn5YgPux7bqkZhG424un2WIZHR5Xldo7wi8kje', NULL, '2026-09-13 00:50:41', '2026-09-13 00:50:41'),
(5, 'Usuario Prueba 5', 'usuario5@nexalearn.com', 'user', NULL, '$2y$12$Yg9/924DeQ9WqApE5WKQF.pj/HpSekQb59x7LoPE06aBryeiL4mQm', NULL, '2026-09-13 00:53:08', '2026-09-13 00:53:08'),
(6, 'Administrador', 'admin@nexalearn.com', 'admin', NULL, '$2y$12$AM/x07ZO94lf4QlVQFAjK.lhDONxAtiOBtRu.SNJsZA6GXt8O1dhu', NULL, '2026-09-13 01:25:51', '2026-09-13 01:25:51'),
(7, 'Usuario Demo', 'demo@nexalearn.com', 'user', NULL, '$2y$12$3G/niyOMvvhnTE8SJoXvLex2ZVrs5nMY0sNhhiMVRxmXgVHFRihf6', NULL, '2026-09-13 01:25:51', '2026-09-13 01:25:51');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courses_category_id_foreign` (`category_id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
export default [
    js.configs.recommended,
    {
        rules:{
            "no-unused-const":"error",
            "no-undef":"error"
        }
    },
    eslintConfigPrettier
]
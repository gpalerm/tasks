import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question: Question): boolean => question.published,
    );
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question: Question): boolean =>
            //if any of these fields are not empty (so do not have a length of zero) then
            //the question is non empty and gets added to the new filtered array
            question.body.length !== 0 ||
            question.expected.length !== 0 ||
            question.options.length !== 0,
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    //looks for the question with the given id in the questions array
    const question: Question | undefined = questions.find(
        (question: Question): boolean => question.id === id,
    );
    //if the question wasnt found then the find method returns undefined
    //and then if undefined is stored in the question var then it returns null,
    //otherwise if the question was found it returns the question
    return question === undefined ? null : question;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter(
        (question: Question): boolean => !(question.id === id),
    );
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((question: Question): string => question.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce(
        (currentTotal: number, question: Question): number =>
            currentTotal + question.points,
        0,
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    //creates a new array with just the published questions
    const cleaned: Question[] = questions.filter(
        (question: Question): boolean => question.published,
    );
    //then accumulates & returns the sum of all the points in the new array of just published questions
    return cleaned.reduce(
        (currentTotal: number, question: Question) =>
            currentTotal + question.points,
        0,
    );
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    //for each question it creates an array of the question's desired fields as strings,
    //then joins all the values with a comma which returns a string value for each question and creates an array
    //with the string representations for each question
    let questionToStringArr = questions.map((question: Question): string =>
        [
            question.id.toString(),
            question.name,
            question.options.length.toString(),
            question.points.toString(),
            question.published ? "true" : "false",
        ].join(","),
    );
    //creates a 2nd new string array with the first value as id,name,options,points,published and then unpacks
    //the other questionToStringArr, and then joins each string separated by a new line
    return ["id,name,options,points,published", ...questionToStringArr].join(
        "\n",
    );
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(
        //need the parentheses around the curly braces to pass it as an expression not a block
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    //need these parentheses again so its passed as an expression not a block
    return questions.map(
        (question: Question): Question => ({ ...question, published: true }),
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    return questions.every(
        //checks if every questions type is the same as the type of the first question in the array
        (question: Question): boolean => question.type === questions[0].type,
    );
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    //unpacks the original questions array and then uses makeblankquestion to add blank question onto the end
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return questions.map(
        (question: Question): Question =>
            question.id === targetId ?
                //if the questions id matches the target id, it creates & adds a new question with all the same fields
                //copied but updates the name to newName
                { ...question, name: newName }
                //otherwise copies the original question
            :   question,
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    return questions.map(
        (question: Question): Question =>
            question.id === targetId ?
                //if the question id matches the target id then it checks if the new type isnt mc
                newQuestionType !== "multiple_choice_question" ?
                    //if not mc -> expr evaluates to true -> creates new q with new type and options set to empty
                    { ...question, type: newQuestionType, options: [] }
                    //otherwise -> expr is false -> new q with new type but options unchanged
                :   { ...question, type: newQuestionType }
                //adds a new unchanged question for all the other questions
            :   question,
    );
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    //helper function for updating the options array of the target question
    function optionsHelper(
        question: Question,
        targetOptionIndex: number,
        newOption: string,
    ): Question {
        if (targetOptionIndex === -1) {
            //copies the original options array and then adds the new option to the end
            return { ...question, options: [...question.options, newOption] };
        } else {
            //first copies the OG options array to a new array and then modifies the option at the given index
            const updatedOptions = [...question.options];
            updatedOptions[targetOptionIndex] = newOption;
            return { ...question, options: updatedOptions };
        }
    }

    return questions.map(
        (question: Question): Question =>
            question.id === targetId ?
                //if the id matches the target id, it calls the helper to modify the options array
                optionsHelper(question, targetOptionIndex, newOption)
                //otherwise it just returns a copy of the question
            :   question,
    );
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    // finding the index of the question with the target id
    let targetIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId,
    );

    //then duplicating that target question by indexing into questions arr with the found index
    let dupedQuestion: Question = duplicateQuestion(
        newId,
        questions[targetIndex],
    );

    //and then creating a new array and unpacking the og questions array up to the target index, then adding in the
    //duplicated question, then unpacking the rest of the og questions array
    //and returning
    return [
        ...questions.slice(0, targetIndex + 1),
        dupedQuestion,
        ...questions.slice(targetIndex + 1),
    ];
}

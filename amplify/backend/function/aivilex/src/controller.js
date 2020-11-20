var LexRuntime = require('aws-sdk/clients/lexruntime')

const lex = new LexRuntime({
    region: 'us-east-1',
})

exports.sampleMessage = (req, res) => {
    const postTextParams = {
        // required
        botName: "AIVIBot",
        botAlias: "internal",
        inputText: "Hello",
        userId: "user",
        // not required
        requestAttributes: {},
        sessionAttributes: {},
    };
    
    lex.postText(postTextParams, function(error, data) {
        if (error) return res.status(error.status || 500).send(error.message);
    
        const { 
            intentName,
            // nluIntentConfidence,
            // alternativeIntents,
            slots,
            sessionAttributes,
            message,
            // sentimentResponse,
            // messageFormat,
            // dialogState,
            // slotToElicit,
            responseCard,
            sessionId,
            // botVersion,
        } = data;
        const mappedResponse = {
            user: 'bot',
            timestamp: Date.now(),
            message,
            sessionAttributes,
            slots,
            responseCard,
            intentName,
            sessionId,
        };
        if (responseCard) mappedResponse.actions = {
            actionType: "multipleOption",
            content: {
                optionList: responseCard.genericAttachments[0].buttons.map(button => ({
                    label: button.text,
                    value: button.value,
                })),
            },
        };
        res.send(mappedResponse);
    });
}

exports.converseWithLex = (req, res) => {
    const {
        message,
        userId,
        sessionAttributes,
    } = req.body;
    
    const postTextParams = {
        // required
        botName: 'AIVIBot',
        botAlias: 'internal',
        inputText: message,
        userId: userId,
        // not required
        requestAttributes: {},
        sessionAttributes: sessionAttributes || {},
    };
    
    lex.postText(postTextParams, function (error, data) {
        if (error) return res.status(error.status || 500).send(error.message);
        else {
            const mappedResponse = {
                ...data,
                user: 'bot',
                timestamp: Date.now(),
            };

            // Mapping different kind of actions
            if (data.responseCard) mappedResponse.actions = {
                actionType: "multipleOption",
                content: {
                    optionList: data.responseCard.genericAttachments[0].buttons.map(button => ({
                        label: button.text,
                        value: button.value,
                    })),
                },
            };
    
            res.send(mappedResponse);
        };
    });
}

exports.redirectIntent = (req, res) => {
    const { body: {
        intentName,
        userId,
    } } = req;

    const putSessionParams = {
        botName: 'AIVIBot',
        botAlias: 'internal',
        userId: userId,
        dialogAction: {
            intentName: intentName,
            type: "Delegate",
        },
        sessionAttributes: {},
    };
    lex.putSession(putSessionParams, function (err, data) {
        if (err) res.send(err);
        else res.send(data);
    })
}